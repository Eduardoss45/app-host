from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from uuid import uuid4


def upload_image_accommodation(instance, filename):
    return f"{instance.id_accommodation}-{filename}"


class Accommodations(models.Model):
    id_accommodation = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField()
    state = models.BooleanField(default=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    image = models.ImageField(
        upload_to=upload_image_accommodation, null=True, blank=True
    )


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("O email deve ser definido")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    id_user = models.AutoField(primary_key=True)
    birth_date = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    username = models.CharField(
        max_length=150, unique=True
    )  # Ainda mantém o campo username
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=150, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []  # Não são necessários outros campos obrigatórios além do email

    objects = (
        CustomUserManager()
    )  # Substitui o UserManager padrão pelo CustomUserManager

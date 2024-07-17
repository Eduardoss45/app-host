from django.contrib.auth.models import AbstractUser
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


class User(AbstractUser):
    id_user = models.AutoField(primary_key=True)
    birth_date = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=150, blank=True)

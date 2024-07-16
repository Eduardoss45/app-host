from django.db import models
from uuid import uuid4

# Create your models here.


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

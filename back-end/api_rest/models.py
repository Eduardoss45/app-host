from django.db import models


class User(models.Model):
    id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=150, default='')
    user_email = models.EmailField(default='')
    user_age = models.IntegerField(default=0)
    profile_picture = models.ImageField(
        upload_to='profile_pictures/', null=True, blank=True)

    def __str__(self):
        return f'User ID: {self.id} | Name: {self.user_name} | E-mail: {self.user_email}'


class Accommodation(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(
        upload_to='accommodations/', null=True, blank=True)
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'Accommodation ID: {self.id} | Name: {self.name} | Price: {self.price}'

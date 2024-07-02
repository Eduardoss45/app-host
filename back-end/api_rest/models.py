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
    CATEGORY_CHOICES = [
        ('pousada', 'Pousada'),
        ('chale', 'Chalé'),
        ('apto', 'Apto'),
        ('casa', 'Casa'),
        ('quarto', 'Quarto'),
    ]

    id = models.AutoField(primary_key=True)
    image = models.ImageField(
        upload_to='accommodations/', null=True, blank=True)
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(
        max_length=50, choices=CATEGORY_CHOICES, default='pousada')
    localization = models.TextField(max_length=100, default='Not specified')

    def __str__(self):
        return f'Accommodation ID: {self.id} | Name: {self.name} | Price: {self.price}'

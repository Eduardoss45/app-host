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

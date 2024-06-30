from rest_framework import serializers
from .models import User, Accommodation


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class AccommodationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accommodation
        fields = '__all__'

from rest_framework import serializers
from data import models


class AccommodationsSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Accommodations
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = [
            "id_user",
            "username",
            "birth_date",
            "phone_number",
            "email",
            "password",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = models.User.objects.create_user(**validated_data)
        return user

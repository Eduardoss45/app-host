from rest_framework import serializers
from data import models


class AccommodationsSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Accommodations
        fields = "__all__"

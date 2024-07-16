from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from apphost.api import serializers
from data import models


class AccommodationsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)

    serializers_class = serializers.AccommodationsSerializer
    queryset = models.Accommodations.objects.all()

from rest_framework import generics, viewsets
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import (
    get_user_model,
)
from .serializers import AccommodationsSerializer, UserSerializer
from data import models

User = get_user_model()


class AccommodationsViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = AccommodationsSerializer
    queryset = models.Accommodations.objects.all()


class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

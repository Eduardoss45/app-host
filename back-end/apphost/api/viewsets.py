from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import (
    get_user_model,
)
from .serializers import (
    AccommodationsSerializer,
    UserUpdateSerializer,
    UserSerializer,
    MyTokenObtainPairSerializer,
)
from data import models

User = get_user_model()


class AccommodationsViewSet(viewsets.ModelViewSet):
    permission_classes = [
        IsAuthenticated,
    ]
    serializer_class = AccommodationsSerializer
    queryset = models.Accommodations.objects.all()


class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class UserUpdate(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserUpdateSerializer

    def put(self, request, *args, **kwargs):
        user_id = kwargs.get("id_user")
        try:
            user = models.User.objects.get(id_user=user_id)
        except models.User.DoesNotExist:
            return Response(
                {"detail": "User not found"}, status=status.HTTP_404_NOT_FOUND
            )

        serializer = self.get_serializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserDetailView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        user_id = self.kwargs.get("id_user")
        return generics.get_object_or_404(User, id_user=user_id)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
            return Response(serializer.validated_data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

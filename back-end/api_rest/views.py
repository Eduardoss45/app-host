from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User, Accommodation
from .serializers import UserSerializer, AccommodationSerializer

@api_view(['GET'])
def api_root(request):
    """
    Endpoint para retornar todos os dados da API.
    """
    if request.method == 'GET':
        users = User.objects.all()
        accommodations = Accommodation.objects.all()

        user_serializer = UserSerializer(users, many=True)
        accommodation_serializer = AccommodationSerializer(
            accommodations, many=True)

        data = {
            'users': user_serializer.data,
            'accommodations': accommodation_serializer.data
        }
        return Response(data)


@api_view(['GET'])
def get_users(request):
    """Endpoint para obter a lista de usuários."""
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT'])
def get_by_id(request, id):
    """Endpoint para obter ou atualizar um usuário pelo ID."""
    try:
        user = User.objects.get(id=id)
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def user_manager(request):
    """API para gerenciar usuários."""
    if request.method == 'GET':
        user_id = request.GET.get('id')
        if user_id:
            try:
                user = User.objects.get(id=user_id)
                serializer = UserSerializer(user)
                return Response(serializer.data)
            except ObjectDoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'PUT':
        user_id = request.data.get('id')
        if not user_id:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        try:
            updated_user = User.objects.get(id=user_id)
            serializer = UserSerializer(updated_user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    elif request.method == 'DELETE':
        user_id = request.data.get('id')
        if not user_id:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        try:
            user = User.objects.get(id=user_id)
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def accommodation_list(request):
    if request.method == 'GET':
        accommodations = Accommodation.objects.all()
        serializer = AccommodationSerializer(accommodations, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AccommodationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def accommodation_detail(request, pk):
    try:
        accommodation = Accommodation.objects.get(pk=pk)
    except Accommodation.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AccommodationSerializer(accommodation)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AccommodationSerializer(accommodation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        accommodation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    return Response(status=status.HTTP_400_BAD_REQUEST)

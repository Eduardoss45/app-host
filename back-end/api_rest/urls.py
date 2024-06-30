from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_root, name='api_root'),
    path('users/', views.get_users, name='get_users'),
    path('users/<int:id>/', views.get_by_id, name='get_by_id'),
    path('user-manager/', views.user_manager, name='user_manager'),
    path('accommodations/', views.accommodation_list, name='accommodation_list'),
    path('accommodations/<int:pk>/', views.accommodation_detail,
         name='accommodation_detail'),
]

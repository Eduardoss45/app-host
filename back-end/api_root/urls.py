from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from api_rest.views import accommodation_list, accommodation_detail

urlpatterns = [
    path('', include('api_rest.urls')),
    path('api/', include('api_rest.urls')),
    path('admin/', admin.site.urls),
    path('accommodations/', accommodation_list, name='accommodation-list'),
    path('accommodations/<int:pk>/', accommodation_detail,
         name='accommodation-detail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

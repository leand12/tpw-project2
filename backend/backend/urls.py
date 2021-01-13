"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
import rest_api.views as views


urlpatterns = [
    path('admin/', admin.site.urls),

    # path('auth/login/', obtain_jwt_token),
    path('auth/', include('rest_auth.urls')),
    path('auth/signup/', include('rest_auth.registration.urls')),
    path('auth/refresh-token/', refresh_jwt_token),

    # web services
    path('ws/tag/<int:id>/', views.get_tag),
    path('ws/tags/', views.get_tags),
    path('ws/article/', views.get_article),
    path('ws/articles/', views.get_articles),
    path('ws/create/article/', views.create_article),
    path('ws/update/article/', views.update_article),
    path('ws/delete/article/<int:id>/', views.delete_article),
    path('ws/user/', views.get_users),
    path('ws/users/', views.get_users),
    path('ws/item/', views.get_item),
    path('ws/items/', views.get_items),
    path('ws/game/', views.get_game),
    path('ws/games/', views.get_games),
    path('ws/console/', views.get_console),
    path('ws/consoles/', views.get_consoles),
    path('ws/review/', views.get_review),
    path('ws/reviews/', views.get_reviews),
]

# Serving the media files in development mode
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += staticfiles_urlpatterns()

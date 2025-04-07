# from django.contrib import admin
# from django.urls import path, include

# urlpatterns = [
#     path("admin/", admin.site.urls),
#     path("", include("api.urls")),
# ]

from django.contrib import admin
from django.urls import path, include
from api.views import home  # ✅ Import the home view

urlpatterns = [
    path("admin/", admin.site.urls),
    path("https://django-cbo-gabriel-2.onrender.com/", home, name="home"),  # ✅ Now "/" works
    path("https://django-cbo-gabriel-2.onrender.com/api/", include("api.urls")),  # ✅ "/api/" also works
    path("https://django-cbo-gabriel-2.onrender.com/api/auth", include("knox.urls")),
]

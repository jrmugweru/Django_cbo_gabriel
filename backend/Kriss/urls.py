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
    path("", home, name="home"),  # ✅ Now "/" works
    path("api/", include("api.urls")),  # ✅ "/api/" also works
    path("api/auth/", include("knox.urls")),
]

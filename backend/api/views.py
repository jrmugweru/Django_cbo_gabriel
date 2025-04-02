
from django.shortcuts import render
from django.http import HttpResponse  # ✅ Fix import (capital H)
from rest_framework import viewsets, permissions
from .serializers import  *
from .models import *
from rest_framework.response import Response
from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken
from .models import ContactMessage
api=get_user_model()




# ✅ Use ViewSet for ContactMessage
class ContactMessageViewSet(viewsets.ViewSet):
    queryset = api.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]  # Anyone can submit

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        



class RegisterViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset=api.objects.all()
    serializer_class = RegisterSerializer

    def create (self, request):
        serializer= self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

class LoginViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def create (self, request):
        serializer= self.serializer_class(data=request.data)

        if serializer.is_valid():
            email= serializer.validated_data['email']
            password= serializer.validated_data['password']

            user= authenticate(request, email= email, password= password)

            if user:
                _, token = AuthToken.objects.create(user)
                # _, token = AuthToken.objects.create(user)
                
                return Response (
                    {
                    "user":self.serializer_class(user).data,
                    "token":token
                    }
                )

            else:
                return Response({"error":"invalid Credentials"}, status= 400)   

        else:
            return Response(serializer.errors, status=400)


def home(request):
    return HttpResponse("This is the home page")  # ✅ Fix indentation and return statement

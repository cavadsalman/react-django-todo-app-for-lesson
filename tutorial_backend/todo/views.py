from django.shortcuts import render
from .serializers import DeadlineSearializer, TodoSerializer
from .models import Deadline, Todo
from rest_framework import generics
# Create your views here.

class TodoListAV(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoDetailAV(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
    
class DeadlineListAV(generics.ListCreateAPIView):
    queryset = Deadline.objects.all()
    serializer_class = DeadlineSearializer
    
    
class DeadlineDetailAV(generics.RetrieveUpdateDestroyAPIView):
    queryset = Deadline.objects.all()
    serializer_class = DeadlineSearializer
    
#enable us convert our data to native python data type that can be rendered into JSON 

from rest_framework import serializers
from EmployeeApp.models import Department, Employees

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ('DepartmentId',
                  'DepartmentName')
        

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = ('EmployeeId',
                  'EmployeeName',
                  'DepartmentName',
                  'DateOfJoining',
                  'PhotoFileName')
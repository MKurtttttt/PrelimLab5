import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Employee {
  employeeNumber: number;
  fullName: string;
  gender: string;
  email: string;
  employmentStatus: string;
  salary: number;
}

@Component({
  selector: 'app-employee-directory',
  imports: [CommonModule],
  templateUrl: './employee-directory.html',
  styleUrl: './employee-directory.css',
})
export class EmployeeDirectory {
  employees: Employee[] = [
    {
      employeeNumber: 1001,
      fullName: 'John Smith',
      gender: 'Male',
      email: 'john.smith@supergpu.com',
      employmentStatus: 'Full-time',
      salary: 75000
    },
    {
      employeeNumber: 1002,
      fullName: 'Sarah Johnson',
      gender: 'Female',
      email: 'sarah.johnson@supergpu.com',
      employmentStatus: 'Full-time',
      salary: 82000
    },
    {
      employeeNumber: 1003,
      fullName: 'Michael Chen',
      gender: 'Male',
      email: 'michael.chen@supergpu.com',
      employmentStatus: 'Part-time',
      salary: 35000
    },
    {
      employeeNumber: 1004,
      fullName: 'Emily Davis',
      gender: 'Female',
      email: 'emily.davis@supergpu.com',
      employmentStatus: 'Full-time',
      salary: 68000
    },
    {
      employeeNumber: 1005,
      fullName: 'David Wilson',
      gender: 'Male',
      email: 'david.wilson@supergpu.com',
      employmentStatus: 'Contract',
      salary: 95000
    },
    {
      employeeNumber: 1006,
      fullName: 'Lisa Anderson',
      gender: 'Female',
      email: 'lisa.anderson@supergpu.com',
      employmentStatus: 'Full-time',
      salary: 78000
    },
    {
      employeeNumber: 1007,
      fullName: 'Robert Taylor',
      gender: 'Male',
      email: 'robert.taylor@supergpu.com',
      employmentStatus: 'Part-time',
      salary: 32000
    },
    {
      employeeNumber: 1008,
      fullName: 'Jennifer Martinez',
      gender: 'Female',
      email: 'jennifer.martinez@supergpu.com',
      employmentStatus: 'Full-time',
      salary: 85000
    }
  ];

  getStatusClass(status: string): string {
    if (status === 'Full-time') {
      return 'badge bg-success';
    } else if (status === 'Part-time') {
      return 'badge bg-warning text-dark';
    } else {
      return 'badge bg-info text-dark';
    }
  }

  getSalaryClass(salary: number): string {
    if (salary >= 80000) {
      return 'text-success fw-bold';
    } else if (salary >= 50000) {
      return 'text-primary';
    } else {
      return 'text-secondary';
    }
  }

  getFullTimeCount(): number {
    return this.employees.filter(e => e.employmentStatus === 'Full-time').length;
  }

  getAverageSalary(): number {
    if (this.employees.length === 0) return 0;
    return this.employees.reduce((sum, e) => sum + e.salary, 0) / this.employees.length;
  }
}

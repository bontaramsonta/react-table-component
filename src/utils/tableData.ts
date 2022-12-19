import { faker } from '@faker-js/faker'

export interface EmployeesData {
  employeeId: string
  name: string
  profile: string
  email: string
  dateOfjoining: Date
  contractEnd: Date
  designation: string
  jobDescription: string
  department: string
  kpi: string
  overall: string
}

export const generateTableData = () => {
  let gen: EmployeesData[]
  gen = Array(10).fill(0).map(() => ({
    employeeId: faker.datatype.uuid(),
    name: faker.name.fullName(),
    profile: faker.internet.avatar(),
    email: faker.internet.email(),
    dateOfjoining: faker.datatype.datetime(),
    contractEnd: faker.datatype.datetime(),
    designation: faker.name.jobTitle(),
    jobDescription: faker.name.jobDescriptor(),
    department: faker.name.jobType(),
    kpi: faker.random.numeric(),
    overall: faker.helpers.arrayElement(['excellent', 'good', 'bad', 'liability']),
  }))
  console.log({ gen })
  return gen
}
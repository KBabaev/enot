export interface TaskRowType {
  title: string
  description: string
  isDone: boolean
  id: number
}

export interface TaskType {
  date: string
  today: boolean
  tomorrow: boolean
  tasks: TaskRowType[]
  dayId: number
}

const tasks: TaskRowType[] = [
  {
    title: 'Visit David',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isDone: false,
    id: 1,
  },
  {
    title: 'Groceries For Dinner',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isDone: false,
    id: 2,
  },
  {
    title: 'Fix Dad’s iPad',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isDone: true,
    id: 3,
  },
]

export const data: TaskType[] = [
  {
    date: '24/12',
    today: true,
    tomorrow: false,
    tasks,
    dayId: 1,
  },
  {
    date: '25/12',
    today: false,
    tomorrow: true,
    tasks,
    dayId: 2,
  },
  {
    date: '26/12',
    today: false,
    tomorrow: false,
    tasks,
    dayId: 3,
  },
  {
    date: '27/12',
    today: false,
    tomorrow: false,
    tasks,
    dayId: 4,
  },
  {
    date: '28/12',
    today: false,
    tomorrow: false,
    tasks,
    dayId: 5,
  },
  {
    date: '29/12',
    today: false,
    tomorrow: false,
    tasks,
    dayId: 6,
  },
]

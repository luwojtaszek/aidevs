export const addToToDo = {
  name: 'addToToDo',
  description: 'Add task to ToDo list',
  parameters: {
    type: 'object',
    properties: {
      tool: {
        type: 'string',
        enum: ['ToDo'],
        description: 'Tool name',
      },
      desc: {
        type: 'string',
        description: 'Description of the task',
      },
    },
    required: ['tool', 'desc'],
  },
};

export const addToCalendar = {
  name: 'addToCalendar',
  description: 'Add task to calendar',
  parameters: {
    type: 'object',
    properties: {
      tool: {
        type: 'string',
        enum: ['Calendar'],
        description: 'Tool name',
      },
      desc: {
        type: 'string',
        description: 'Description of the task',
      },
      date: {
        type: 'string',
        description: 'Date of the task in format YYYY-MM-DD',
      },
    },
    required: ['tool', 'desc', 'date'],
  },
};

const tm=require('./tm');
const moment = require('moment')
const Task = require('./model/Task');

const mockTasks = [ new Task(1, 'task1'), new Task(2, 'task2') ]

it("should add new task", () => {
    //Act
    let task = tm.addNewTask("go home");
    //Assert
    expect(task.text).toBe("go home");
    expect(task.priority).toBe("p1");
    expect(task.project).toBe("inbox");
    expect(task.labels).toBe("");
    expect(tm.setTasks.length).toBe(1)
})

it('searchTasks should return results based on query', () => { 
  
  tm.setTasks([...mockTasks]);

  const result = tm.searchTasks('task1');
  
  expect(result.length).toBe(1)
  expect(result).toEqual(
      expect.arrayContaining([
          expect.objectContaining({
              text:'task1'
          })
      ])
  )
})

it("should edit given task", () => {

    let task = tm.editTask(1, "text", "go home");
    expect(task[0].text).toBe("go home");

    let task2 = tm.editTask(1, "label", "label1");
    expect(task2[0].label).toBe("label1");

    let task3 = tm.editTask(1, "project", "project1");
    expect(task3[0].project).toBe("project1");

    let task4 = tm.editTask(1, "priority", "priority1");
    expect(task4[0].priority).toBe("priority1");
  
    let task5 = tm.editTask(1, "schedule", "12-03-2020");
    let date = moment(task5[0].schedule).format('MM-DD-YYYY')
    expect(date).toBe("12-03-2020");
})


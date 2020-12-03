
// data model

class Task {
    constructor(id, text) {
        this.id = id; 
        this.text = text; 
        this.project = "inbox";
        this.schedule = new Date();
        this.labels = "";
        this.priority = "p1";
    }
}

module.exports = Task

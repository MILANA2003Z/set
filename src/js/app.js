export class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {
    if (this.members.has(name)) {
      throw new Error('Объект уже существует в команде');
    }
    this.members.add(name);
  }

  addAll(...names) {
    for (const item of names) {
      this.add(item);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}

export default Team;

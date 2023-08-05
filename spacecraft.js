class Spacecraft {
  constructor(x, y, z, direction) {
    this.position = { x, y, z };
    this.direction = direction;
  }

  moveForward() {
    switch (this.direction) {
      case "N":
        this.position.y += 1;
        break;
      case "S":
        this.position.y -= 1;
        break;
      case "E":
        this.position.x += 1;
        break;
      case "W":
        this.position.x -= 1;
        break;
      case "Up":
        this.position.z += 1;
        break;
      case "Down":
        this.position.z -= 1;
        break;
    }
  }

  moveBackward() {
    switch (this.direction) {
      case "N":
        this.position.y -= 1;
        break;
      case "S":
        this.position.y += 1;
        break;
      case "E":
        this.position.x -= 1;
        break;
      case "W":
        this.position.x += 1;
        break;
      case "Up":
        this.position.z -= 1;
        break;
      case "Down":
        this.position.z += 1;
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "S":
        this.direction = "E";
        break;
      case "E":
        this.direction = "N";
        break;
      case "W":
        this.direction = "S";
        break;
      case "Up":
        this.direction = "W";
        break;
      case "Down":
        this.direction = "E";
        break;
    }
  }

  turnRight() {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "S":
        this.direction = "W";
        break;
      case "E":
        this.direction = "S";
        break;
      case "W":
        this.direction = "N";
        break;
      case "Up":
        this.direction = "E";
        break;
      case "Down":
        this.direction = "W";
        break;
    }
  }

  turnUp() {
    switch (this.direction) {
      case "N":
      case "S":
      case "E":
      case "W":
        this.direction = "Up";
        break;
    }
  }

  turnDown() {
    switch (this.direction) {
      case "N":
      case "S":
      case "E":
      case "W":
        this.direction = "Down";
        break;
    }
  }
}

module.exports = Spacecraft;

// Initialize spacecraft
const chandrayaan3 = new Spacecraft(0, 0, 0, "N");

// Execute commands
const commands = ["f", "r", "u", "b", "l"];
for (const command of commands) {
  switch (command) {
    case "f":
      chandrayaan3.moveForward();
      break;
    case "b":
      chandrayaan3.moveBackward();
      break;
    case "r":
      chandrayaan3.turnRight();
      break;
    case "l":
      chandrayaan3.turnLeft();
      break;
    case "u":
      chandrayaan3.turnUp();
      break;
    case "d":
      chandrayaan3.turnDown();
      break;
  }
}

// Print final position and direction
console.log("Final Position:", chandrayaan3.position);
console.log("Final Direction:", chandrayaan3.direction);

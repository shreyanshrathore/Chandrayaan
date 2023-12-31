const Spacecraft = require('./Spacecraft');

describe('Spacecraft', () => {
  it('should move forward correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.moveForward();
    expect(spacecraft.position).toEqual({ x: 0, y: 1, z: 0 });
  });

  it('should move backward correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.moveBackward();
    expect(spacecraft.position).toEqual({ x: 0, y: -1, z: 0 });
  });

  it('should turn left correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.turnLeft();
    expect(spacecraft.direction).toBe('W');

    spacecraft.turnLeft();
    expect(spacecraft.direction).toBe('S');

    spacecraft.turnLeft();
    expect(spacecraft.direction).toBe('E');

    spacecraft.turnLeft();
    expect(spacecraft.direction).toBe('N');

    spacecraft.turnLeft();
    expect(spacecraft.direction).toBe('W');

  });

  it('should turn right correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.turnRight();
    expect(spacecraft.direction).toBe('E');

    spacecraft.turnRight();
    expect(spacecraft.direction).toBe('S');

    spacecraft.turnRight();
    expect(spacecraft.direction).toBe('W');

    spacecraft.turnRight();
    expect(spacecraft.direction).toBe('N');

    spacecraft.turnRight();
    expect(spacecraft.direction).toBe('E');

    spacecraft.turnRight();
    expect(spacecraft.direction).toBe('S');
  });

  it('should turn up correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.turnUp();
    expect(spacecraft.direction).toBe('Up');
  });

  it('should turn down correctly', () => {
    const spacecraft = new Spacecraft(0, 0, 0, 'N');
    spacecraft.turnDown();
    expect(spacecraft.direction).toBe('Down');
  });
});

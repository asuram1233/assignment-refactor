export class Machine {
  constructor(public type: number, public machineName: string) {}

  get name(): string {
    let machineName: string;
    if (!this.machineName) {
      switch (this.type) {
        case 0:
          machineName = "bulldozer";
          break;
        case 1:
          machineName = "crane";
          break;
        case 2:
          machineName = "tractor";
          break;
        case 3:
          machineName = "truck";
          break;
        case 4:
          machineName = "car";
          break;
        default:
          machineName = "";
          break;
      }
      return machineName;
    }
  }

  get description(): string {
    let hasMaxSpeed: boolean;

    this.type === 3 || this.type === 4
      ? (hasMaxSpeed = false)
      : (hasMaxSpeed = true);

    let description = ` ${this.color} ${this.name} [${this.getMaxSpeed(
      this.type,
      hasMaxSpeed
    )}].`;
    return description;
  }

  get color(): string {
    let color: string;
    switch (this.type) {
      case 0:
        color = "red";
        break;

      case 1:
        color = "blue";
        break;

      case 2:
        color = "green";
        break;

      case 3:
        color = "yellow";
        break;

      case 4:
        color = "brown";
        break;

      default:
        color = "white";
        break;
    }
    return color;
  }

  get trimColor(): string {
    let baseColor = this.color;
    let trimColor = "";
    if (this.type) {
      this.type === 1
        ? this.isDark(baseColor)
          ? (trimColor = "black")
          : (trimColor = "white")
        : {};
      this.type === 2 && this.isDark(baseColor) ? (trimColor = "gold") : {};
      this.type == 3 && this.isDark(baseColor) ? (trimColor = "silver") : {};
    }
    return trimColor;
  }

  isDark(color: string) {
    let isDark = false;
    color === "red" ||
    color === "green" ||
    color === "black" ||
    color === "crimson"
      ? (isDark = true)
      : (isDark = false);
    return isDark;
  }

  getMaxSpeed(machineType: any, noMax = false) {
    let max = 70;
    if (noMax) {
      if (machineType === 0) max = 80;
      else if (machineType == 1) max = 75;
      else if (machineType == 2 || machineType == 4) max = 90;
    } else {
      if (machineType == 2) max = 60;
    }
    return max;
  }
}

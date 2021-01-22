export class Machine {
  constructor(public type: number, public machineName: string) {}

  get name(): string {
    let machineName: string;
    if (!this.machineName) {
      switch (this.type) {
        case 0:
          return (machineName = "bulldozer");

        case 1:
          return (machineName = "crane");

        case 2:
          return (machineName = "tractor");

        case 3:
          return (machineName = "truck");

        case 4:
          return (machineName = "car");

        default:
          return (machineName = "");
      }
    }
  }

  get description(): string {
    let hasMaxSpeed: boolean;

    if (this.type) {
      switch (this.type) {
        case 1:
          hasMaxSpeed = true;
          break;

        case 2:
          hasMaxSpeed = true;
          break;

        case 3:
          hasMaxSpeed = false;
          break;

        case 4:
          hasMaxSpeed = false;
          break;

        default:
          hasMaxSpeed = true;
          break;
      }
    }

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
        return (color = "red");

      case 1:
        return (color = "blue");

      case 2:
        return (color = "green");

      case 3:
        return (color = "yellow");

      case 4:
        return (color = "brown");

      default:
        return (color = "white");
    }
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
    let absoluteMax = 70;
    let max = 70;
    if (machineType == 1 && noMax == false) max = 70;
    else if (noMax == false && machineType == 2) max = 60;
    else if (machineType == 0 && noMax == true) max = 80;
    else if (machineType == 2 && noMax == true) max = 90;
    else if (machineType == 4 && noMax == true) max = 90;
    else if (machineType == 1 && noMax == true) max = 75;
    return max;
  }
}

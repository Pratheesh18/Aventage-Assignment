function getWindow(periods, month) {
    switch (periods) {
      case 1:
        if (month >= 1 && month <= 12) return month <= 12 ? 0 : -1;
        break;
      case 2:
        if (month >= 1 && month <= 6) return 0;
        if (month >= 7 && month <= 12) return 1;
        if (month >= 12) return -1;
        break;
      case 12:
        if (month >= 1 && month <= 12) return month - 1;
        if (month >= 12) return -1;
        break;
      case 4:
        if (month >= 1 && month <= 3) return 0;
        if (month >= 6 && month <= 8) return 2;
        break;
    }
    return -1;
  }
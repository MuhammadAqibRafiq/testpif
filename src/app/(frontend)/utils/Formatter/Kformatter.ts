export const Kformatter = (value:number) => {
    if (value === null || value === undefined) return '-';
  
    const absValue = Math.abs(value);
  
    if (absValue < 1000) {
      return value.toString();
    } else if (absValue < 1_000_000) {
      return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    } else if (absValue < 1_000_000_000) {
      return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (absValue < 1_000_000_000_000) {
      return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B'; // Billion
    } else {
      return (value / 1_000_000_000_000).toFixed(1).replace(/\.0$/, '') + 'T'; // Trillion
    }
  }
  
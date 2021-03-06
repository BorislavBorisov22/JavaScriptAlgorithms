/* Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. Create functions to display the monthly aver‐
age, a specific week’s average, and all the weeks’ averages. */

class WeeklyTemps {
    constructor(monthsCount) {
        this.dataStore = Array.from({ length: monthsCount }).map(_ => []);
    }

    add(month, weekValue) {
        this.dataStore[month].push(weekValue);
    }

    monthlyAverage(month) {
        let totalWeeks = 0;
        const sum = this.dataStore.reduce((sum, currentMonth) => {
            totalWeeks += currentMonth.length;
            return currentMonth.reduce((a, b) => a + b, 0) + sum;
        }, 0)

        return sum / totalWeeks;
    }

    weeklyAverage(month) {
        const sum = this.dataStore[month].reduce((a, b) => a + b, 0);
        const average = sum / this.dataStore[month].length;
        return average;
    }
}

const monthTemp = new WeeklyTemps(3);
monthTemp.add(0, 3);
monthTemp.add(1, 5);
monthTemp.add(2, 4);
monthTemp.add(1, 3);

console.log(`Total average ${monthTemp.monthlyAverage()}`);
console.log(`Weekly Average ${monthTemp.weeklyAverage(1)}`);
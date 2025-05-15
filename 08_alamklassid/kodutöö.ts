let labels: string[] = ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Elite'];

type Sex = 'mees' | 'naine'

interface StatsReport {
  sex: Sex;
  bodyWeight: number;
  exerciseName: string;
  lift_weight: number;
  relativeStrength: number;
  rank: string;
}

abstract class Stats {
    constructor(protected bodyWeight, protected sex){
        this.bodyWeight = bodyWeight;
        this.sex = sex;
    }
    public getReport(): StatsReport {
        const lift = this.getLiftWeight()
        const strlevel = parseFloat((lift / this.bodyWeight).toFixed(2));
        return {
            sex: this.sex,
            bodyWeight: this.bodyWeight,
            exerciseName: this.getExerciseName(),
            lift_weight: lift,
            relativeStrength: strlevel,
            rank: this.calcRank(strlevel)
        }
    }

    calcRank(strlevel){
        const stds = this.getStandards()[this.sex];
        let rank = 0;
        for(let i = 0; i < stds.length; i++){
            if(strlevel >= stds[i]){
                rank = i
            }
        }
        return labels[rank];
    }

    abstract getStandards();

    abstract getExerciseName(): string

    abstract getLiftWeight(): number
}

class Bench extends Stats {
    report:any;
    constructor(protected bodyWeight: number, protected sex: Sex, protected lift_weight: number){
        super(bodyWeight, sex);
        this.lift_weight = lift_weight;
    }

    getStandards() {
        return {
            'mees':   [0.5, 0.75, 1.0, 1.5, 2.0],
            'naine': [0.25, 0.4, 0.7, 1.0, 1.25]
        }
    }
    getExerciseName(): string {
        return 'Rinnalt surumine'
    }

    getLiftWeight(): number{
        return this.lift_weight
    }
}

let bench = new Bench(78, 'mees', 90)
console.log(bench.getReport());
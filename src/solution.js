

export default function solution(content){
  // первый шаг
    const data = content.split('\n');
    const rows = data.slice(1, data.length -1).map((row) => row.split(','));
    console.log(`count: ${rows.length}`);
  // второй шаг
    const cities = (content) => { 
      const obj = {date:content[0], max:parseInt(content[1]), min:parseInt(content[2]), humidity:parseInt(content[3]), pressure:content[4], windPpeed:content[5], WindDirection:content[6], Sity:content[7], State:content[8], TimeZone:content[9]}
      return obj;
    };

    const USA = rows.map((row) => cities(row))
    const virvat = USA.map((row) => row.Sity)
    const filter = virvat.filter((row, index) => virvat.indexOf(row) === index)
    console.log(`Cities: ${filter.sort().join(', ')}`)


// третий шаг
    const mini = rows.map((row) => cities(row));
    const mini1 = mini.map((row) => row.humidity)
    const mini2 = Math.min(...mini1);
    const max = Math.max(...mini1)
    console.log(`Humidity: min: ${mini2}, max: ${max}`)
 
  }
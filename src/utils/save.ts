import fs from 'fs';

export const save = async (data: string, path: string = '../data/unnamed.json') => {
  fs.writeFile(path, data, function(err) {
    if (err) {
        console.log(err);
    }
});
}

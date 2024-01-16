import { resolve } from 'path';
import LineCounter from './line-counter';
import Options from './options';
import ProcessFile from './process-file';
import validation from './validations';
const chalk = require('chalk');
const { cyan } = chalk;

export const deduper = async () => {
  console.log(cyan('Working...'));
  const { file, column, keep, delimiter } = Options();
  let total: number;

  // Count number of lines if file accessible
  try {
    total = await LineCounter(file);
  } catch (error) {
    if (file === '') validation('no-file');
    else validation('incorrent-file', file);
  }

  // Resolve the absolute file path
  const filePath = resolve(process.cwd(), file);

  console.log('filepath', filePath);

  await ProcessFile(total, filePath, file, column, keep, delimiter);
};

deduper();

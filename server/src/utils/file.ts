import fs from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    // verifica se o filename existe
    await fs.promises.stat(filename)
  } catch (error) {
    return
  }
  // remove o filename
  await fs.promises.unlink(filename)
}
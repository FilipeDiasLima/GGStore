import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from 'react-icons/fi'

import styles from './styles.module.scss'

interface Props {
  onFileUploaded: (file: File) => void;
}

const PosterDropzone = ({ onFileUploaded }: Props) => {
  const [selectedFileUrlPoster, setSelectedFileUrlPoster] = useState('');
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrlPoster(fileUrl);
    onFileUploaded(file);
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop
  })

  return (
    <div className={styles.dropzone} {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {
        selectedFileUrlPoster
          ? <img src={selectedFileUrlPoster} alt="" />
          : (
            <p>
              <FiUpload />
              Imagem Poster do jogo
            </p>
          )
      }
    </div>
  )
}

export default PosterDropzone
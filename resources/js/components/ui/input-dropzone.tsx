import { CloudUploadIcon } from 'lucide-react';
import { useCallback, type JSX } from 'react';
import { useDropzone } from 'react-dropzone';

import { cn } from '@/lib/utils';

export default function InputDropzone({ ...props }: React.ComponentProps<'input'>): JSX.Element {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles: 2 });

    return (
        <div>
            <div
                {...getRootProps({
                    className: cn('style-dashed-borders relative h-45 w-2xl overflow-hidden rounded-xl'),
                })}
            >
                <input
                    {...getInputProps()}
                    {...props}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                    {isDragActive ? (
                        <span className="text-center font-medium text-brand-neutral-alt-700">Drop the files here ...</span>
                    ) : (
                        <div className="flex flex-col items-center">
                            <CloudUploadIcon className="size-12" />
                            <span className="mt-2 block text-center text-xl">
                                Upload your Inspiration
                                <br />
                                (jpg, jpeg, png)
                            </span>
                            <span className="mt-1.5 block text-center font-medium text-brand-neutral-alt-700">Drag and drop files here</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

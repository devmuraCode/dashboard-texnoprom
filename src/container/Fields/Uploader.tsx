// import React, { useState } from 'react';
// import { useField } from 'formik';

// import Modal from '@/components/Modal';
// import UploaderBase from '@/components/Uploader';
// import { useList } from '@/modules/banner/hooks';

// interface IProps {
//   name: string;
//   type: 'image' | 'video' | 'file';
//   accept: string[];
//   maxFileSize?: number;
//   details: {
//     resolution?: string;
//     extension?: string;
//     size?: string;
//   };
//   validation?: {
//     required?: boolean;
//   };
// }

// const Uploader: React.FC<IProps> = ({ name, type, accept, maxFileSize, details, validation }) => {
//   const [isView, setView] = useState(false);
//   const [field, meta, helpers] = useField({
//     name,
//     validate: (value): string => {
//       if (!validation) {
//         return '';
//       }

//       if (validation.required && !value) {
//         return 'validation_required';
//       }

//       return '';
//     },
//   });

//   let state;

//   const status = {
//     loading: 'progress',
//     error: 'error',
//     success: 'success',
//   };


//   return (
//     <>
//       <UploaderBase
//         {...{ state, type, accept, details, onSelect }}
//         progress={{
//           onCancel: () => helpers.setValue(null),
//         }}
//         file={{
//           onView: () => setView(true),
//           onRemove: () => helpers.setValue(null),
//         }}
//         message={meta.error}
//       />
//       <Modal title={item.name} open={isView} onCancel={() => setView(false)} width={800}>
//         <img
//           src={item.url}
//           style={{ width: 'auto', display: 'block', margin: 'auto', maxWidth: 600 }}
//           alt={item.name}
//         />
//       </Modal>
//     </>
//   );
// };

// export default Uploader;

import React from 'react'

const Uploader = () => {
  return (
    <div>Uploader</div>
  )
}

export default Uploader

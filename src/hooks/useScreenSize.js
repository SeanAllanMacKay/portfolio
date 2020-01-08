import React from 'react'
import { useMedia } from 'use-media';

export default function* useScreenSize(){
    yield {
        small: useMedia({ maxWidth: 767 }),
        medium: useMedia({ maxWidth: 899 }),
        large: useMedia({ maxWidth: 999 }),
        massive: useMedia({ minWidth: 1000 })
    };
}
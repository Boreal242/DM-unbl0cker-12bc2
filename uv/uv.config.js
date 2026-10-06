self.__uv$config = {
    prefix: '/uv/',
    bare: 'https://restorations.work',
    encodeUrl: Ultrawide.codec.xor.encode,
    decodeUrl: Ultrawide.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

import * as THREE from './vendor/three.module.js';
const el = document.querySelector('.cosmos');
const pause = { current: matchMedia('(prefers-reduced-motion: reduce)').matches };
const button = document.querySelector('.charm-footer button');
button?.addEventListener('click', () => { pause.current = !pause.current; button.setAttribute('aria-pressed', String(pause.current)); button.setAttribute('aria-label', pause.current ? '3D 모션 재생' : '3D 모션 정지'); button.textContent = pause.current ? '▶' : 'Ⅱ'; });
function setFailed() { el.innerHTML = '<p class="scene-fallback">Z12</p>'; }
function start() {
    el.innerHTML = '';
    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    }
    catch {
        setFailed(true);
        return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setClearColor(0xffffff, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.6;
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(36, 1, .1, 40);
    camera.position.set(0, .1, 6.5);
    scene.add(new THREE.HemisphereLight(0xfffaff, 0xcc81a8, 3));
    for (const [x, y, z, color, intensity] of [[3, 4, 4, 0xffffff, 50], [-3, 1, 3, 0xff7ebe, 25], [1, -2, -2, 0x9bbdff, 35]]) {
        const light = new THREE.PointLight(color, intensity);
        light.position.set(x, y, z);
        scene.add(light);
    }
    const group = new THREE.Group();
    scene.add(group);
    const shape = new THREE.Shape();
    shape.moveTo(0, .35);
    shape.bezierCurveTo(-.9, 1.15, -1.55, -.2, 0, -1.12);
    shape.bezierCurveTo(1.55, -.2, .9, 1.15, 0, .35);
    const hg = new THREE.ExtrudeGeometry(shape, { depth: .23, bevelEnabled: true, bevelSegments: 5, steps: 1, bevelSize: .18, bevelThickness: .17, curveSegments: 40 });
    hg.center();
    const heart = new THREE.Mesh(hg, new THREE.MeshPhysicalMaterial({ color: 0xff73b2, metalness: .3, roughness: .19, clearcoat: 1, clearcoatRoughness: .1 }));
    heart.rotation.set(-.05, -.24, -.1);
    group.add(heart);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.48, .018, 12, 140), new THREE.MeshStandardMaterial({ color: 0xc9a0cc, metalness: .7, roughness: .2 }));
    ring.rotation.set(1.15, .2, .4);
    group.add(ring);
    const starShape = new THREE.Shape();
    for (let i = 0; i < 10; i++) {
        const angle = i * Math.PI / 5 + Math.PI / 2, r = i % 2 === 0 ? .3 : .14;
        if (i === 0)
            starShape.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
        else
            starShape.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
    }
    starShape.closePath();
    const stg = new THREE.ExtrudeGeometry(starShape, { depth: .09, bevelEnabled: true, bevelSegments: 3, bevelSize: .035, bevelThickness: .035 });
    stg.center();
    const satellites = new THREE.Group();
    group.add(satellites);
    for (let i = 0; i < 12; i++) {
        const a = i * Math.PI / 6;
        const m = i < 2 ? new THREE.Mesh(stg, new THREE.MeshPhysicalMaterial({ color: i ? 0xe9c9ff : 0xffd478, metalness: .45, roughness: .18, clearcoat: 1 })) : new THREE.Mesh(new THREE.SphereGeometry(.045, 12, 12), new THREE.MeshPhysicalMaterial({ color: 0xfffafb, metalness: .15, roughness: .15, clearcoat: 1 }));
        m.position.set(Math.cos(a) * 1.55, Math.sin(a) * .8, Math.sin(a) * .8);
        satellites.add(m);
    }
    const p = { x: 0, y: 0 };
    const move = (e) => { const b = el.getBoundingClientRect(); p.x = (e.clientX - b.left) / b.width - .5; p.y = (e.clientY - b.top) / b.height - .5; };
    el.addEventListener('pointermove', move);
    const resize = () => { const w = el.clientWidth, h = el.clientHeight; if (!w || !h)
        return; camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h); };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();
    let frame = 0, last = 0, t = 0, visible = true;
    const io = new IntersectionObserver(e => { visible = e[0].isIntersecting; });
    io.observe(el);
    const render = (now) => { frame = requestAnimationFrame(render); const delta = Math.min((now - last) / 1000, .05); last = now; if (!visible || document.hidden)
        return; if (!pause.current) {
        t += delta;
        heart.rotation.y = Math.sin(t * .45) * .35 + p.x * .3;
        heart.rotation.z = -.12 + Math.sin(t * .4) * .08;
        group.position.y = Math.sin(t * .6) * .07;
        satellites.rotation.z = t * .065;
        group.rotation.x = p.y * .12;
    } renderer.render(scene, camera); };
    frame = requestAnimationFrame(render);
    const lost = (e) => { e.preventDefault(); setFailed(true); };
    renderer.domElement.addEventListener('webglcontextlost', lost);
    return () => { cancelAnimationFrame(frame); io.disconnect(); ro.disconnect(); el.removeEventListener('pointermove', move); renderer.domElement.removeEventListener('webglcontextlost', lost); scene.traverse(o => { if (o instanceof THREE.Mesh) {
        o.geometry.dispose();
        (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => m.dispose());
    } }); renderer.dispose(); renderer.domElement.remove(); };
}
if (el && !pause.current) {
    const dispose = start();
    if (dispose)
        window.addEventListener('pagehide', dispose, { once: true });
}

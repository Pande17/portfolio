import enzImg from '@/assets/enz.png';
import viotrackImg from '@/assets/viotrack.png';
import natoraImg from '@/assets/natora.png';
import senyaraImg from '@/assets/senyara.png';
import wasanaImg from '@/assets/wasana.png';
import templateImg from '@/assets/about-portrait.jpeg';

export const projects = [
	{
		id: 'enz',
		title: 'ENZ',
		image: enzImg,
		descriptionKey: 'projects.enz.desc',
		tags: ['React', 'Tailwind CSS', 'Go', 'MongoDB', 'Docker'],
		demoUrl: '#',
		category: 'webapp',
	},
	{
		id: 'viotrack',
		title: 'Viotrack',
		image: viotrackImg,
		descriptionKey: 'projects.viotrack.desc',
		tags: ['PHP', 'HTML', 'Tailwind CSS', 'MySQL'],
		demoUrl: '#',
		category: 'webapp',
	},
	{
		id: 'natora',
		title: 'Natora',
		image: natoraImg,
		descriptionKey: 'projects.natora.desc',
		tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
		demoUrl: '#',
		category: 'landing',
	},
	{
		id: 'senyara',
		title: 'Senyara',
		image: senyaraImg,
		descriptionKey: 'projects.senyara.desc',
		tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
		demoUrl: '#',
		category: 'landing',
	},
	{
		id: 'wasana',
		title: 'Wasana',
		image: wasanaImg,
		descriptionKey: 'projects.wasana.desc',
		tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
		demoUrl: '#',
		category: 'landing',
	},
	{
		id: 'umkm-templates',
		title: 'UMKM Templates',
		image: templateImg,
		descriptionKey: 'projects.umkm.desc',
		tags: ['React', 'Tailwind CSS', 'Vite', 'AOS'],
		demoUrl: '#',
		category: 'landing',
	},
];

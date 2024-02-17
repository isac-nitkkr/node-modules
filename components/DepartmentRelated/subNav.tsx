import Link from 'next/link';

const SubNav = () => {
  const subLinks = [
    { key: 'About', title: 'About', link: '#' },
    { key: 'VisionAndMission', title: 'Vision & Mission', link: '#' },
    { key: 'HODMessage', title: "HOD's Message", link: '#' },
    { key: 'Programs', title: 'Programs', link: '#' },
    { key: 'FacultyAndMore', title: 'Faculty And More', link: '#' },
    { key: 'PhotoGallery', title: 'Photo Gallery', link: '#' },
  ];

  return (
    <div className="sticky top-10">
      <div className="mb-3 ">
        <div className="border-1 flex justify-evenly space-x-10 rounded-full border  border-white bg-root p-1">
          {subLinks.map((btn) => (
            <Link
              key={btn.key}
              href={btn.link}
              className="ransition-all rounded-full p-3 duration-300 hover:bg-primary-20 hover:text-white"
            >
              {btn.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNav;

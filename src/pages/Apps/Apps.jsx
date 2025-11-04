import AppCard from '../../components/AppCard/AppCard';
import useApps from '../../hooks/useApps';


const Apps = () => {
  const { apps } = useApps()
  return (
    
    <section className="py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          All Apps {apps.length}
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Explore All Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {
            apps.map(app => <AppCard key={app.id} app={app} />)
        }
      </div>
    </section>

  );
};

export default Apps;
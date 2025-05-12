export default function About() {
    return (
        <div className="flex flex-col p-4">
            <p className="text-sm mb-2">
                Licensed under <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer" className="underline">GPLv3</a>.
            </p>
            <p className="text-sm">
                This project uses the following libraries:
            </p>
            <ul className="text-sm list-disc list-inside">
                <li>
                    <a href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer" className="underline">Leaflet</a>
                </li>
                <li>
                    <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer" className="underline">OpenStreetMap</a>
                </li>
                <li>
                    <a href="https://www.graphhopper.com/" target="_blank" rel="noopener noreferrer" className="underline">GraphHopper</a>
                </li>
            </ul>
        </div>
    );
}
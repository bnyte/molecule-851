import {create, Workbench} from "@dtinsight/molecule";
import '@dtinsight/molecule/esm/style/mo.css';

const moInstance = create({
  extensions: [],
  defaultLocale: 'zh-CN'
});
const MoleculeProvider = () => moInstance.render(<Workbench />);

export default function HomePage() {
  return (
    <MoleculeProvider />
  );
}

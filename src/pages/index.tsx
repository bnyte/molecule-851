import {create, molecule, Workbench} from "@dtinsight/molecule";
import '@dtinsight/molecule/esm/style/mo.css';
import {IExtensionService} from "@dtinsight/molecule/esm/services";

const moInstance = create({
  extensions: [
    {
      id: "InitializeExtension",
      name: "Initialize Extension",
      activate(extensionCtx: IExtensionService) {
        const items = molecule.activityBar.getState().data || [];
        const {ACTIVITY_BAR_GLOBAL_ACCOUNT} = molecule.builtin.getConstants();
        const target = items.find((item) => item.id === ACTIVITY_BAR_GLOBAL_ACCOUNT);
        if (target) {
          target.contextMenu = [
            {
              id: 'login',
              name: '去登陆',
              icon: 'log-in',
              onClick: () => alert("被点击了，看看有没有被收起"),
            }
          ]
        }
      },
      dispose(extensionCtx: IExtensionService) {

      },
    }
  ],
  defaultLocale: 'zh-CN'
});
const MoleculeProvider = () => moInstance.render(<Workbench />);

export default function HomePage() {
  return (
    <MoleculeProvider />
  );
}

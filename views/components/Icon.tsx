import styled from "@emotion/styled";
import * as React from "react";
import { ForegroundColor, FOREGROUND_COLORS } from "../constant/color";
import { DARK_MODE } from "../constant/mediaquery";

export { ForegroundColor as IconColor } from "../constant/color";

interface IconProps extends React.Attributes {
  name: IconName;
  fill: ForegroundColor;
  className?: string;
}

export enum IconName {
  facebook,
  github,
  instagram,
  linkedIn
}

function Icon({ name, fill, ...props }: IconProps) {
  return (
    <Root
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      _color={fill}
      {...props}
    >
      {CONTENTS.get(name)!}
    </Root>
  );
}

const Root = styled.svg<{ _color: ForegroundColor }>`
  & path {
    fill: ${({ _color }) => FOREGROUND_COLORS.get(_color)!.light};

    ${DARK_MODE} {
      fill: ${({ _color }) => FOREGROUND_COLORS.get(_color)!.dark};
    }
  }
`;

const CONTENTS = new Map<IconName, React.ReactElement>([
  [
    IconName.facebook,
    <path
      d="M20.7550709 0H3.232489C1.44733496 0 .00011736 1.44715892.00011736 3.23237164V20.7550709c0 1.7852127 1.44715892 3.232489 3.23237164 3.232489h8.6420538l.0147286-8.5719315H9.66231785c-.28940831 0-.52430318-.2340147-.52541809-.523423l-.01067971-2.7630514c-.00111492-.2909926.23448411-.5274718.52547677-.5274718h2.22290468V8.93187286c0-3.09828851 1.8922445-4.78533007 4.6561173-4.78533007h2.2679707c.2901711 0 .5254768.23524694.5254768.52547677v2.32981907c0 .29011247-.2351296.52530073-.5251834.52547677l-1.391824.00064548c-1.5030807 0-1.794132.71424939-1.794132 1.76244499v2.31133493h3.3027873c.3146992 0 .5588655.2747971.5217799.5873252l-.3274914 2.7630514c-.031335.2644107-.2555501.4636283-.52178.4636283h-2.9605672l-.0147286 8.5718142h5.1421614c1.785154 0 3.2323129-1.4471589 3.2323129-3.232313V3.23237164C23.9875012 1.44715892 22.5402836 0 20.7550709 0z"
      fillRule="nonzero"
    />
  ],
  [
    IconName.github,
    <path
      d="M22.3671253 5.99032346c-1.0719636-1.83668337-2.5260137-3.29078815-4.362533-4.36264237C16.1677995.55577221 14.1625695.01995444 11.9874806.01995444c-2.17481545 0-4.18070156.53598178-6.01711158 1.60772665-1.83668337 1.07179955-3.29067881 2.525959-4.36264237 4.36264237C.53592711 7.82695216 0 9.83256492 0 12.0071071c0 2.6121184.76209567 4.9610022 2.2866697 7.0472528 1.52441003 2.0864146 3.4937221 3.5301321 5.90777221 4.3313166.28100228.0521549.4890205.0154716.62427335-.1091207.13530752-.1247563.20287927-.2810023.20287927-.468082 0-.0312164-.00267881-.3120547-.00787243-.8428428-.00535764-.5307882-.00787244-.9938406-.00787244-1.3889385l-.35901595.0621048c-.22890205.0419316-.51766742.0596993-.86629612.0546697-.3484647-.0048656-.71021413-.041385-1.08475627-.1092848-.37470615-.0672984-.72322551-.2233804-1.04583143-.467918-.32244192-.2445375-.55134397-.5646287-.68665148-.9597813l-.15608201-.3591799c-.10403645-.2391253-.26782688-.5047654-.49158998-.7959363-.22376309-.2914441-.450041-.4890205-.67894305-.5930569l-.10928474-.0782324c-.07282004-.0519908-.1403918-.114697-.20287927-.1874624-.0624328-.0727653-.1091754-.1455854-.1403918-.2185148-.03127107-.072984-.00535763-.1328474.07801367-.1798086.0833713-.0469613.234041-.0697586.45266515-.0697586l.31205467.0466333c.20812756.041713.4655672.1663052.77264692.3745421.30691572.2080729.5592164.4785786.75695672.8114078.23945331.4267517.52794533.7519271.86629613.9756902.33807745.2237631.67894305.3354533 1.02226879.3354533.34332574 0 .63985422-.0260228.88969476-.077795.2495672-.0520456.48371754-.1302779.70234169-.2342597.0936492-.6974761.3486287-1.2332938.76471982-1.607836-.59305695-.0623234-1.12625057-.1561913-1.59985422-.2810023-.47333029-.1249749-.96246013-.3277995-1.4670615-.6090205-.50487472-.2808382-.92369932-.6295763-1.25658314-1.0456127-.3329385-.4162551-.60617768-.9627335-.81933486-1.6389431-.21326651-.6764829-.3199271-1.4568382-.3199271-2.3412847 0-1.2593166.41111617-2.33095217 1.23318451-3.21550798-.3850934-.94676993-.34873804-2.00812756.1091754-3.18396355.30177676-.09375854.74930296-.02339863 1.3423599.21064237.59316629.23415034 1.02746242.43473348 1.30332575.60103872.27586332.16625057.49689293.3071344.66341685.42139408.96792711-.27045103 1.96679723-.40570387 2.99688383-.40570387 1.0300866 0 2.0291754.13525284 2.9971572.40570387l.5931116-.3744328c.4055945-.24984055.8845558-.47879727 1.4357358-.68692483.5515079-.20801822.97323-.26531207 1.2647289-.17155353.468082 1.17589066.509795 2.23719362.1245922 3.18396355.8220137.88455581 1.2332939 1.95646467 1.2332939 3.21550797 0 .8844465-.1070433 1.667262-.3199818 2.3489385-.2132118.6817859-.4888018 1.2277175-.8268793 1.6389431-.3384601.4111708-.7599635.7571754-1.2645649 1.037959-.5047107.2810022-.9940045.4838268-1.4673348.6088018-.473549.1249749-1.0067426.2188975-1.5997996.2813303.5409021.468082.8114078 1.206943.8114078 2.2162551v3.2931389c0 .1870798.0650569.3432711.1952802.4680821.1300592.1245922.3354533.1612756.6164555.109066 2.4143782-.8010752 4.3836902-2.2448474 5.9080456-4.3312619 1.5241913-2.0862506 2.2865604-4.4351344 2.2865604-7.0472529-.0005467-2.17426879-.5367472-4.17971754-1.6080547-6.01634624z"
      fillRule="nonzero"
    />
  ],
  [
    IconName.instagram,
    <path
      d="M16.5 0C20.6415 0 24 3.3585 24 7.5v9c0 4.1415-3.3585 7.5-7.5 7.5h-9C3.3585 24 0 20.6415 0 16.5v-9C0 3.3585 3.3585 0 7.5 0h9zm5.25 16.5v-9c0-2.895-2.355-5.25-5.25-5.25h-9c-2.895 0-5.25 2.355-5.25 5.25v9c0 2.895 2.355 5.25 5.25 5.25h9c2.895 0 5.25-2.355 5.25-5.25zM12 6c3.3135 0 6 2.6865 6 6s-2.6865 6-6 6-6-2.6865-6-6 2.6865-6 6-6zm0 9.75c2.067 0 3.75-1.683 3.75-3.75 0-2.0685-1.683-3.75-3.75-3.75S8.25 9.9315 8.25 12c0 2.067 1.683 3.75 3.75 3.75zm6.45-9.4005c-.4415517 0-.7995-.35794834-.7995-.7995s.3579483-.7995.7995-.7995.7995.35794834.7995.7995-.3579483.7995-.7995.7995z"
      fillRule="nonzero"
    />
  ],
  [
    IconName.linkedIn,
    <path
      d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
      fillRule="nonzero"
    />
  ]
]);

export default Icon;

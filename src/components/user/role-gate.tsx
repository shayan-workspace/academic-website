"use client";

import type { PropsWithChildren } from "react";
import type { Role } from "@prisma/client";

import { Error as ErrorComponent } from "@/components/common/error";

import { useCurrentRole } from "@/hooks/use-current-role";

interface RoleGateProps {
  allowedRoles: Role[];
}

export const RoleGate = ({
  children,
  allowedRoles,
}: Readonly<PropsWithChildren<RoleGateProps>>) => {
  const role = useCurrentRole();

  if (role && !allowedRoles.includes(role)) {
    return (
      <ErrorComponent message="You do not have permission to view this content!" />
    );
  }

  return <>{children}</>;
};
